import React, { useState, useEffect } from "react";
import Header from "components/Header";
import { FrameTop, Billboard, FrameBox } from "components/Banner";
import { CardEditor, CardProduct } from "components/Card";
import Article from "components/Article";
import Review from "components/Review";
import Popular from "components/Popular";
import Video from "components/Video";
import Trending from "components/Trending";
import Brands from "components/Brands";
import Footer from "components/Footer";
import axios from "axios";
import { data } from "autoprefixer";
function App() {
  const [editorsChoice, setEditorChoice] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);
  const [latestReviews, setLatestReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [trending] = useState(data["trending"]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch(
      "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp"
    );
    const dataEditor = await response.json();
    setEditorChoice(dataEditor["editor's choice"]);
    setLatestArticles(dataEditor["latest articles"]);
    setLatestReviews(dataEditor["latest review"]);
  };

  return (
    <>
      <Header />
      <div className="mb-8">
        <FrameTop />
        <Billboard />
        {/* <FrameBox /> */}
      </div>
      <section className="mt-[5rem] container-two ">
        <div className="mb-5">
          <h3 className="text-xl font-bold text-gray-800">Editor's Choice</h3>
          <p className="text-gray-400">Curated with love</p>
        </div>
        <div className="grid grid-cols-5">
          {loading ? (
            <p>loading..</p>
          ) : (
            editorsChoice &&
            editorsChoice?.map((item) => (
              <CardEditor
                name={item.editor}
                role={item.role}
                nameProduct={item.product.name}
                rating={item.product.rating}
                desc={item.product.description}
                img={item.product.image}
              />
            ))
          )}
        </div>
      </section>
      <section className=" mt-[5rem] bg-[#FDDAE0] h-[22rem] items-center py-4 ">
        <div className="flex justify-evenly">
          <div className=" w-[15rem]">
            <h2 className="font-bold text-lg text-gray-800">
              Looking for products that are just simply perfect for you?
            </h2>
            <p className="py-3 text-sm text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="flex justify-end">
              <button className="py-3 px-5 rounded bg-Pinky text-white ">
                See My Matches
              </button>
            </div>
          </div>
          <div className=" w-1/2 grid grid-cols-3">
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      </section>
      <div className="my-8">
        <Billboard />
      </div>
      <section className="w-full py-[4rem] container-two">
        <h2 className="text-xl font-bold text-gray-800">Latest Article</h2>
        <div className="flex justify-between">
          <p className="text-gray-400">
            So you can make better purchase decision
          </p>
          <p className="text-Pinky font-semibold">See more</p>
        </div>
        <div className="grid grid-cols-3 pt-7 gap-4">
          {loading ? (
            <p>loading..</p>
          ) : (
            latestArticles &&
            latestArticles?.map((item) => (
              <Article
                title={item.title}
                author={item.author}
                image={item.image}
                published={item.published_at}
              />
            ))
          )}
        </div>
      </section>
      <section className="w-full container-two pb-9">
        <div className="flex  ">
          <div className="w-3/4  ">
            <h2 className="text-xl font-bold text-gray-800">Popular Group</h2>
            <div className="flex justify-between pb-4">
              <p className="text-gray-400">
                So you can make better purchase decision
              </p>
              <p className="text-Pinky font-semibold mr-[5rem]">See more</p>
            </div>
            <div className="">
              <Review latestReviews={latestReviews} />
              {/* {" "}
              {loading ? (
                <p>loading..</p>
              ) : (
                latestReviews &&
                latestReviews?.map((item) => (
                  <Review
                    user={item.user}
                    profile={item.profile}
                    image={item.product.image}
                    name={item.product.name}
                    desc={item.product.description}
                    star={item.star}
                    comment={item.comment}
                  />
                ))
              )} */}
            </div>
          </div>
          <div className="pt-16">
            <FrameBox />
          </div>
        </div>
      </section>
      <section className="w-full py-[4rem] container-two">
        <h2 className="text-xl font-bold text-gray-800">Popular Group</h2>
        <div className="flex justify-between">
          <p className="text-gray-400">
            So you can make better purchase decision
          </p>
          <p className="text-Pinky font-semibold">See more </p>
        </div>
        <div className="grid grid-cols-4 pt-7 gap-4">
          <Popular />
          <Popular />
          <Popular />
          <Popular />
        </div>
      </section>
      <section className="container-two">
        <Video />
      </section>
      <section className="container-two pt-9">
        <div className="mb-5">
          <h3 className="text-xl font-bold text-gray-800">
            Trending This Week
          </h3>
          <p className="text-gray-400">Curated with love</p>
          <Trending />
        </div>
      </section>
      <section className="container-two py-9">
        <h2 className="text-xl font-bold text-gray-800">Top Brands</h2>
        <div className="flex justify-between pb-4">
          <p className="text-gray-400">
            So you can make better purchase decision
          </p>
          <p className="text-Pinky font-semibold mr-[5rem]">See more</p>
        </div>
        <Brands />
      </section>
      <section className="pt-5">
        <Footer />
      </section>
    </>
  );
}

export default App;
