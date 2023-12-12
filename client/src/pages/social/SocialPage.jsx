import SocialPost from "/src/components/SocialPost";

const SocialPage = () => {
  const testPosts = [
    {
      id: 1,
      title: "lol",
      content: "xdxdxdxd????"
    }
  ];

  return (
    <div className="mx-auto text-center">
      {testPosts.map((post) => <SocialPost key={post.id} post={post} />)}
    </div>
  )
}

export default SocialPage;