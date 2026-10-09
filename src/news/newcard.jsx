const Newscard = ({ elem }) => {
  // console.log(elem);
  
  return (
    <div className="rounded-2xl overflow-hidden bg-gray-300/50 backdrop-blur-xl border border-white/10">

      <img
        src={elem.image}
        alt={elem.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <p className="text-blue-500 text-sm">
          {elem.category}
        </p>

        <h2 className="text-xl text-blue-500 font-bold mt-2">
          {elem.title}
        </h2>

        <p className="text-gray-500 mt-3 line-clamp-3">
          {elem.description}
        </p>

        <a
          href={elem.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 text-amber-400 font-semibold"
        >
          Read More →
        </a>

      </div>

    </div>
  );
};

export default Newscard;