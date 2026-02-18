import Navbar from "@/components/Navbar/Navbar";
import Container from "@/Container/Container";
import bgMedicineVideo from "@/assets/video/bg-medicine2.mp4";
import { Activity } from "lucide-react";
import SplitScroll from "@/pages/Home/components/SplitScroll";
import vd3 from "@/assets/video/vd3.mp4";
import img2 from "@/assets/images/img2.jpg";
import img4 from "@/assets/images/img4.jpg";

export default function Home() {
  return (
    <div className="w-full min-h-[2500px] relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover"
      >
        <source src={bgMedicineVideo} type="video/mp4" />
      </video>
      <Navbar />

      <Container className="relative pt-[150px]">
        <div className="flex flex-col gap-5">
          <div className=" text-white bg-[#0C7779]/60 text-center justify-center items-center flex rounded-3xl max-w-[290px] h-[40px] gap-1 ">
            <span className="text-[45px] pb-[5px]">•</span>
            <h1>NEXT-GEN BIO-TECHNOLOGY</h1>
          </div>
          <div className="font-semibold">
            <h1 className="text-[50px] text-white">Cell Medicine:</h1>
            <p className="text-[50px] text-white w-[580px] flex flex-col">
              <span
                className="font-bold  text-[60px] bg-gradient-to-r 
text-[#0C7779] 
  bg-clip-text 
  animate-text"
              >
                Регенеративная
              </span>
              медицина
            </p>
          </div>
          <p className="text-white w-[500px] ">
            Научные решения для восстановления организма на клеточном уровне с
            использованием передовых технологий и доказательной медицины .
          </p>
          <div className="flex pt-4">
            <button className="bg-[#0C7779]/60 text-white px-6  rounded-3xl hover:bg-[#0A5F5F]/60 cursor-pointer transition-colors duration-200 flex pt-3 gap-2">
              Get Consultation <Activity />
            </button>
            <button className="ml-4  border-2 border-[#0C7779]  font-medium  cursor-pointer px-6 py-3 rounded-full bg-white/5  backdrop-blur-sm text-white transition-colors duration-200">
              Explore Technologies
            </button>
          </div>
        </div>
        <div className="w-full max-w-[1400px] mx-auto flex items-center gap-16 pt-35">
          <div className="w-[700px] h-[480px] relative rounded-2xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={vd3} type="video/mp4" />
            </video>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <SplitScroll
              mode="lines"
              start="top 85%"
              textClassName="text-[#0C7779] text-[42px] font-semibold"
            >
              Наука, лежащая в основе восстановления
            </SplitScroll>
            <SplitScroll
              mode="lines"
              start="top 85%"
              textClassName="text-gray-600 text-xl max-w-[520px] leading-relaxed"
            >
              Наш клинический центр следует международным стандартам обработки
              клеток и протоколам терапии.
            </SplitScroll>

            <SplitScroll
              mode="lines"
              start="top 85%"
              textClassName="flex flex-col gap-4 text-[18px] text-gray-700"
            >
              <li>
                <span className="text-[#0C7779] text-[30px]">✔</span>
                Собственный криобанк мирового уровня
              </li>
              <li>
                <span className="text-[#0C7779] text-[30px]">✔</span> GMP
                сертифицированные лаборатории
              </li>
              <li>
                <span className="text-[#0C7779] text-[30px]">✔</span>{" "}
                Международная команда биологов и врачей
              </li>
            </SplitScroll>
          </div>
        </div>

        {/* BLOCK 1 */}
        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-24 items-center">
          {/* TEXT */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <SplitScroll
              mode="lines"
              start="top 85%"
              textClassName="text-[#0C7779] text-3xl md:text-4xl font-semibold"
            >
              Клеточные технологии
            </SplitScroll>

            <SplitScroll
              mode="lines"
              start="top 85%"
              textClassName="text-gray-600 text-base md:text-lg leading-relaxed max-w-[560px]"
            >
              Клеточная терапия открывает новые горизонты в медицине, позволяя
              активировать собственные ресурсы организма для восстановления
              поврежденных тканей.
            </SplitScroll>

            <SplitScroll
              mode="lines"
              start="top 85%"
              textClassName="text-gray-700 text-base md:text-lg"
            >
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3">
                  <span className="text-[#0C7779] text-2xl leading-none">
                    ✔
                  </span>
                  <span>Персонализированные протоколы лечения</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0C7779] text-2xl leading-none">
                    ✔
                  </span>
                  <span>Контроль качества на каждом этапе</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0C7779] text-2xl leading-none">
                    ✔
                  </span>
                  <span>Научная доказательная база</span>
                </li>
              </ul>
            </SplitScroll>
          </div>

          {/* IMAGE */}
          <div className="order-1 lg:order-2">
            <div className="w-full max-h-[400px] rounded-3xl overflow-hidden shadow-sm aspect-[4/3] lg:aspect-[13/10]">
              <img
                src={img4}
                alt="Клеточные технологии"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* BLOCK 2 */}
        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-24 items-center">
          {/* IMAGE */}
          <div className="order-1">
            <div className="w-full  max-h-[400px] rounded-3xl overflow-hidden shadow-sm aspect-[4/3] lg:aspect-[13/10]">
              <img
                src={img2}
                alt="Будущее уже сегодня"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex flex-col gap-6 order-2">
            <SplitScroll
              mode="lines"
              start="top 85%"
              textClassName="text-[#0C7779] text-3xl md:text-4xl font-semibold"
            >
              Будущее уже сегодня
            </SplitScroll>

            <SplitScroll
              mode="lines"
              start="top 85%"
              textClassName="text-gray-600 text-base md:text-lg leading-relaxed max-w-[560px]"
            >
              Мы объединяем фундаментальную науку, биоинженерию и клиническую
              практику, создавая инновационные решения в области регенеративной
              медицины.
            </SplitScroll>

            <SplitScroll
              mode="lines"
              start="top 85%"
              textClassName="text-gray-700 text-base md:text-lg"
            >
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3">
                  <span className="text-[#0C7779] text-2xl leading-none">
                    ✔
                  </span>
                  <span>Индивидуальный подбор терапии</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0C7779] text-2xl leading-none">
                    ✔
                  </span>
                  <span>Международные клинические стандарты</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0C7779] text-2xl leading-none">
                    ✔
                  </span>
                  <span>Строгий лабораторный контроль</span>
                </li>
              </ul>
            </SplitScroll>
          </div>
        </section>
      </Container>
    </div>
  );
}
