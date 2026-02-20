import React, { useRef } from "react";
import styled from "styled-components";

type Item = {
  title: string;
  description: string;
  description2: string;
  img: string;
};

type Props = {
  items: Item[];
};

export default function CardHover({ items }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const step = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper>
      <Row ref={scrollRef}>
        {items.map((item) => (
          <div key={item.title} className="card">
            <div className="book relative">
              <div className="inside">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="cover">
                <div className="coverTitle">{item.title}</div>

                <div className="coverImage">
                  <img
                    src={item.img}
                    alt={item.title}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src =
                        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%25' height='100%25' fill='%23e6eef0'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2390a3a4' font-size='20'>Изображение недоступно</text></svg>";
                    }}
                  />
                </div>

                <span className=" flex items-end justify-end gap-2 text-[16px] font-medium text-[#0C7779]">
                  Подробнее
                </span>
              </div>
            </div>
          </div>
        ))}
      </Row>
      <Header className="mt-8 ">
        <div className="nav ">
          <button onClick={() => scroll("left")} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-move-left-icon lucide-move-left text-[#0c7779]"
            >
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
          <button onClick={() => scroll("right")} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-move-right-icon lucide-move-right text-[#0c7779] "
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
        </div>
      </Header>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;

  .kicker {
    font-size: 12px;
    letter-spacing: 0.25em;
    font-weight: 800;
    color: #0c7779;
    margin-bottom: 8px;
  }

  .title {
    font-size: 40px;
    font-weight: 900;
    margin: 0;
    color: #0f172a;
  }

  .nav {
    display: flex;

    gap: 30px;
  }

  .btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: rgba(12, 119, 121, 0.9);

    font-size: 26px;
    cursor: pointer;
    transition: 0.2s ease;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .card {
    flex: 0 0 auto;
    width: 400px;
    height: 320px;
    scroll-snap-align: start;
    color: #0c7779;
  }

  .book {
    position: relative;
    width: 100%;
    height: 300px;
    border-radius: 20px;
    transform-style: preserve-3d;
    perspective: 1400px;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .inside {
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: #f8fafc;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
    z-index: 1;
  }

  .inside h3 {
    margin: 0;
    font-size: 18px;
    padding-left: 40px;

    font-weight: 800;
  }

  .inside p {
    margin: 0;
    font-size: 14px;
    padding-left: 40px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1.5;
  }

  .cover {
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: white;
    padding: 22px;
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.2, 0.9, 0.2, 1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 14px;
    z-index: 2;
  }

  .iconWrap {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: #f1f5f9;
    display: grid;
    place-items: center;
  }

  .iconWrap img {
    width: 28px;
    height: 28px;
  }

  .coverImage {
    width: 100%;
    height: 180px;
    border-radius: 14px;
    overflow: hidden;
    background: #f1f5f9;
  }

  .coverImage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .coverTitle {
    font-size: 18px;
    font-weight: 800;
  }

  .hint {
    margin-top: auto;
    font-size: 15px;
    color: #0c7779;
    display: flex;
    justify-content: end;
  }

  .book:hover .cover {
    transform: rotateY(-78deg);
    overflow: hidden;
    transition: all 0.3s ease;
  }
`;
