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
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const remove = (req, res) => res.send("remove videos");
export const upload = (req, res) => res.send("upload");
export const search = (req, res) => res.send("search");
