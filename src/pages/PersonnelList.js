import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardItem } from "../components/CardItem";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Pagination } from "../components/Pagination";
import { Head } from "../components/Head";

export const PersonnelList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages] = useState(4);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://randomuser.me/api/?results=28")
      .then((res) => {
        setPosts(res.data.results);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, []);

  const lastIndex = currentPage * pages;
  const firstIndex = lastIndex - pages;
  const currentPost = posts.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(posts.length / pages);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-0"></div>
        <div className=" col-lg-9 col-md-9 col-sm-12 content">
          <div className="container">
            <Head title="PERSONNEL LIST" />
            <CardItem items={currentPost} isLoading={isLoading} />
            <div className="mx-auto">
              <Pagination
                nextPage={nextPage}
                previousPage={previousPage}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
