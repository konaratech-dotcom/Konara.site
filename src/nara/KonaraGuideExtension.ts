const ROUTES: Record<string, string> = {
  home: "/",
  homepage: "/",

  solutions: "/solutions",
  solution: "/solutions",

  services: "/services",
  service: "/services",

  website: "/website",
  websites: "/website",
  web: "/website",
  "konara web": "/website",

  about: "/about",
  company: "/about",

  contact: "/contact",
  enquiry: "/contact",
  inquiry: "/contact",
};

function normalise(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .toLowerCase()
    .replace(/^\/+/, "")
    .replace(/[-_]+/g, " ");
}

function findTarget(trace: any) {
  const candidates = [
    trace?.payload?.guide_target,
    trace?.payload?.target,
    trace?.payload?.page,
    trace?.payload?.route,

    trace?.payload?.data?.guide_target,
    trace?.payload?.data?.target,
    trace?.payload?.data?.page,
    trace?.payload?.data?.route,

    trace?.data?.guide_target,
    trace?.data?.target,
    trace?.data?.page,
    trace?.data?.route,

    trace?.guide_target,
    trace?.target,
    trace?.page,
    trace?.route,
  ];

  for (const candidate of candidates) {
    const normalised = normalise(candidate);

    if (ROUTES[normalised]) {
      return ROUTES[normalised];
    }

    if (
      typeof candidate === "string" &&
      candidate.startsWith("/")
    ) {
      const clean = candidate.split("?")[0];

      if (
        [
          "/",
          "/solutions",
          "/services",
          "/website",
          "/about",
          "/contact",
        ].includes(clean)
      ) {
        return clean;
      }
    }
  }

  return null;
}

function navigate(path: string) {
  if (!path) {
    return;
  }

  if (window.location.pathname !== path) {
    window.history.pushState(
      {},
      "",
      path,
    );

    window.dispatchEvent(
      new PopStateEvent("popstate"),
    );
  }

  window.requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

export const KonaraGuideExtension = {
  name: "konara_guide",

  type: "response",

  match: ({ trace }: any) => {
    const type = normalise(
      trace?.type,
    );

    const name = normalise(
      trace?.name,
    );

    return (
      type === "konara guide" ||
      type === "ext konara guide" ||
      name === "konara guide" ||
      name === "ext konara guide"
    );
  },

  render: ({
    trace,
    element,
  }: any) => {
    if (element) {
      element.style.display = "none";
    }

    const target =
      findTarget(trace);

    if (!target) {
      console.warn(
        "[KONARA] Guide Website received without a recognised target.",
        trace,
      );

      return;
    }

    window.setTimeout(
      () => navigate(target),
      100,
    );
  },
};
