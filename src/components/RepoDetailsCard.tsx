interface Props {
  name: string;
  ownerName: string;
  stars: number;
  url: string;
  description?: string;
}

export function RepoDetailsCard({
  name,
  ownerName,
  stars,
  url,
  description,
}: Props) {
  return (
    <div className="border py-3 px-5 rounded md-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <h2 className="text-lg font-bold">{name}</h2>
      <div>
        <p className="text-sm">
          Owner:<span className="fond-bold mr-2">{ownerName}</span>
        </p>
        <p className="text-sm">
          Stars:<span className="fond-bold">{stars}</span>
        </p>
        <a className="text-[blue] underline" target="_blank" href={url}>
          Link to repo
        </a>
      </div>
      <p className="text-sm font-thin">{description}</p>
    </div>
  );
}
