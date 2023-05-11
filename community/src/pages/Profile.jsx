import CommunityHeader from "../components/CommunityHeader";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import TopUsers from "../components/TopUsers";
import TopCommunity from "../components/TopCommunity";

const Profile = () => {
  return (
    <>
      <CommunityHeader />
      <div className="flex max-w-6xl gap-8 mx-auto">
        <section className="flex-1 space-y-8">
          <CreatePost />
          <PostList />
        </section>
        <aside className="space-y-8">
          <TopUsers />
          <TopCommunity />
        </aside>
      </div>
    </>
  );
};

export default Profile;
