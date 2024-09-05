interface ProfileProps {
  avatarUri: string;
  name?: string;
  email?: string;
}

function Profile({
  avatarUri,
  name = "Michael Smith",
  email = "michaelsmith12@gmail.com",
}: ProfileProps) {
  return (
    <div className="p-3 flex items-center gap-x-2 text-white">
      <div className="shrink-0 h-10 w-10 border bg-white rounded-full overflow-hidden">
        <img src={avatarUri} alt="Profile avatar" className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="font-inter text-xs">{name}</p>
        <p className="font-inter text-xs">{email}</p>
      </div>
    </div>
  );
}

export default Profile;
