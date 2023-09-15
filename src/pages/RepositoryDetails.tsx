import { RepoDetailsCard } from "../components/RepoDetailsCard";
import { useAppSelector } from "../hooks/redux";

export function RepositoryDetails() {
  const { selectedRepo: repo } = useAppSelector((state) => state.github);

  if (!repo) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Repo is not defined
      </div>
    );
  }

  return (
    <div className="flex w-full items-center mt-[50px]">
      <RepoDetailsCard
        name={repo.full_name}
        description={repo?.description}
        stars={repo.stargazers_count}
        url={repo.html_url}
        ownerName={repo.owner.login}
      />
    </div>
  );
}
