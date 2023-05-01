export const trending = (req, res) => {
  const videos = [
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
      views: 20,
      id: 1,
    },
    {
      title: "Video #3",
      rating: 5,
      createdAt: "2minutes ago",
      views: 500,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("search");
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const remove = (req, res) => res.send("remove videos");
export const upload = (req, res) => res.send("upload");
