import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: false,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: true,
  },
  {
    userName: "rosorio",
    name: "Renzo Osorio",
    isFollowing: false,
  },
];

export const App = () => {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
};
