let videos = [
  {
    title: "Video #1",
    rating: 5,
    createdAt: "2minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Video #2",
    rating: 4,
    createdAt: "2minutes ago",
    views: 1,
    id: 2,
  },
  {
    title: "Video #3",
    rating: 5,
    createdAt: "2minutes ago",
    views: 500,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  console.log("show video", id);
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const remove = (req, res) => res.send("remove videos");
export const upload = (req, res) => res.send("upload");
export const search = (req, res) => res.send("search");
