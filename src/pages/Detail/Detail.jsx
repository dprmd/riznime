/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Services
import { fetchJikanApi } from "../../services/JikanApi";

// Components
import Back from "../../components/Back";
import DetailSection from "./DetailSection";

// Context
import { useMangaModeContext } from "../../context/MangaContext";

export default function Detail() {
  const { state } = useMangaModeContext();
  const { mal_id } = useParams();
  const [detailAnimeOrManga, setDetailAnimeOrManga] = useState({});
  const [loadingDetailAnimeOrManga, setLoadingDetailAnimeOrManga] =
    useState(true);

  useEffect(() => {
    async function fetchDetail() {
      const fullType = state.mangaMode ? "manga" : "anime";
      const response = await fetchJikanApi(`/${fullType}/${mal_id}/full`);
      if (state.mangaMode) {
        response.data.trailer = {};
        response.data.trailer.url = null;
      }
      setDetailAnimeOrManga(response.data);
      setLoadingDetailAnimeOrManga(false);
    }

    fetchDetail();
  }, [mal_id]);

  document.title = `RizNime - ${detailAnimeOrManga?.title}`;

  return (
    <div className="m-4 p-4">
      {loadingDetailAnimeOrManga ? (
        <div className="text-center font-bold text-xl text-grayWhite">
          Loading . . .
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:items-start">
            <div className="min-w-[200px] max-w-[230px] overflow-hidden">
              <img
                src={detailAnimeOrManga?.images?.webp.large_image_url}
                alt=""
              />
            </div>

            <div className="mx-4 p-4 pt-0 text-grayWhite font-poppins mt-6 md:mt-0 text-center md:text-left">
              {detailAnimeOrManga?.trailer?.url !== null ? (
                <a
                  href={detailAnimeOrManga.trailer.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-max mx-auto px-4 py-2 bg-grayWhite text-black font-bold mb-4 rounded-md cursor-pointer hover:bg-slate-400 duration-300 md:mx-0"
                >
                  Watch Trailer
                </a>
              ) : (
                ""
              )}

              <h3 className="font-bold text-2xl mb-1">
                {detailAnimeOrManga.title}
              </h3>

              <DetailSection
                detailName={"Genres"}
                detailDescription={
                  detailAnimeOrManga.genres ? (
                    <div className="flex flex-wrap justify-center md:justify-start">
                      {detailAnimeOrManga.genres.map((genre) => (
                        <span
                          key={genre.mal_id}
                          className="bg-gray-200 m-1 text-black px-3 rounded-full text-sm"
                        >
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  ) : (
                    "Unknown"
                  )
                }
              />
              <DetailSection
                detailName={"Type"}
                detailDescription={
                  detailAnimeOrManga.type ? detailAnimeOrManga.type : "Unknown"
                }
              />
              <DetailSection
                detailName={"Release"}
                detailDescription={
                  detailAnimeOrManga.year ? detailAnimeOrManga.year : "Unknown"
                }
              />
              <DetailSection
                detailName={"Season"}
                detailDescription={
                  detailAnimeOrManga.season
                    ? detailAnimeOrManga.season
                    : "Unknown"
                }
              />
              <DetailSection
                detailName={"Rank"}
                detailDescription={
                  detailAnimeOrManga.rank ? detailAnimeOrManga.rank : "Unknown"
                }
              />
              <DetailSection
                detailName={"Score"}
                detailDescription={
                  detailAnimeOrManga.score
                    ? detailAnimeOrManga.score
                    : "Unknown"
                }
              />
              <DetailSection
                detailName={"Total Episode"}
                detailDescription={
                  detailAnimeOrManga.episodes
                    ? detailAnimeOrManga.episodes
                    : "Unknown"
                }
              />
            </div>
          </div>

          <div className="text-grayWhite font-poppins text-center md:text-left">
            <DetailSection
              detailName={"Background"}
              detailDescription={
                detailAnimeOrManga.background
                  ? detailAnimeOrManga.background
                  : "Unknown"
              }
            />
            <DetailSection
              detailName={"Synopsis"}
              detailDescription={
                detailAnimeOrManga.synopsis
                  ? detailAnimeOrManga.synopsis
                  : "Unknown"
              }
            />
          </div>
          <Back variant={"mx-auto block mt-10"} />
        </>
      )}
    </div>
  );
}
