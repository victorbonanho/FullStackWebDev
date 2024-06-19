module.exports = (squelize, DataTypes) => {
  const Comments = squelize.define("Comments", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Comments;
};
