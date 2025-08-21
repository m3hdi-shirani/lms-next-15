const BlogDetailsPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return (
    <h1 className="w-full text-5xl flex justify-center items-center">{slug}</h1>
  );
};

export default BlogDetailsPage;
