import Navbar from "@/components/Navbar/Navbar";
import Container from "@/Container/Container";
import bgMedicineVideo from "@/assets/video/bg-medicine2.mp4";
import { Activity } from "lucide-react";
import SplitScroll from "@/pages/Home/components/SplitScroll";
import vd3 from "@/assets/video/vd3.mp4";
import img5 from "@/assets/images/img5.jpg";
import vd4 from "@/assets/video/vd4.mp4";
import CardHover from "@/pages/Home/components/CardHover";
import img12 from "@/assets/images/img12.jpg";
import img7 from "@/assets/images/img7.jpg";
import img8 from "@/assets/images/img8.jpg";
import img9 from "@/assets/images/img9.jpg";
import img10 from "@/assets/images/img10.jpg";
import img11 from "@/assets/images/img11.jpg";
import img13 from "@/assets/images/img13.jpg";
import Terapiya from "./components/Terapiya";
import StatsStrip from "@/pages/Home/components/StatsStrip";
import StatBioPulse from "@/pages/Home/components/StatBioPulse";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const items = [
    {
      title: "Мезенхимальные стволовые клетки ",
      description:
        "Мультипотентные клетки с выраженным регенеративным и иммуномодулирующим потенциалом. Способствуют восстановлению повреждённых тканей, снижению воспаления и активации собственных процессов регенерации организма. Используются в ортопедии, неврологии и anti-age протоколах.",
      img: img10,
    },
    {
      title: "Экзосомальная терапия",
      description:
        "Внеклеточные везикулы, обеспечивающие точную межклеточную коммуникацию. Стимулируют нейрорегенерацию, уменьшают воспалительные процессы и поддерживают восстановление тканей на молекулярном уровне.Перспективное направление современной экзосомы обеспечивают направленную межклеточную коммуникацию.",
      img: img7,
    },
    {
      title: "Редактирование генома",
      description:
        "Современные технологии точного воздействия, включая CRISPR-Cas9, для коррекции генетических предрасположенностей и молекулярных механизмов заболеваний.Перспективное направление современной биомедицины.коррекции наследственных предрасположенностей и молекулярных механизмов заболеваний.",

      img: img8,
    },
    {
      title: "Тканевая инженерия",
      description:
        "Создание биосовместимых структур и матриц с применением 3D-биопечати. Обеспечивает поддержку и интеграцию клеток для восстановления органов и сложных тканевых систем.Инженерия тканей с применением 3D-структур и биоматериалов для формирования функциональных каркасов регенерации.Точная регуляция иммунного ответа .",

      img: img9,
    },
    {
      title: "Клеточные технологии",
      description:
        "Создание биосовместимых структур и матриц с применением 3D-биопечати. Обеспечивает поддержку и интеграцию клеток для восстановления органов и сложных тканевых систем.Современные методы культивирования и контроля клеточных структур с соблюдением международных стандартов качества. Совмещение биологии и инженерных решений .",
      img: img13,
    },
    {
      title: "Регенеративная терапия",
      description:
        "Интеграция клеточных и молекулярных подходов для активации внутренних ресурсов организма. Способствует восстановлению структуры тканей и функциональной реабилитации.Интеграция клеточных и молекулярных решений для восстановления тканей и улучшения функциональных показателей. Научный подход к продлению качества жизни.",

      img: img11,
    },
    {
      title: "Биоматериалы",
      description:
        "Биосовместимые материалы нового поколения, разработанные для интеграции с живыми тканями. Улучшают приживление клеток и создают оптимальную среду для регенерации.Материалы нового поколения, создающие оптимальную среду для роста клеток и регенерации тканей.Биосовместимые материалы нового поколения оптимизирующие.",

      img: img12,
    },
  ];

  return (
    <div className="w-full min-h-[4500px] relative">
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
          <div className=" text-white bg-[#0C7779]/60 text-center justify-center items-center flex rounded-3xl max-w-[350px] h-[40px] gap-1 ">
            <span className="text-[45px] pb-[5px]">•</span>
            <h1>Био-технологии нового поколения</h1>
          </div>
          <div className="font-semibold">
            <h1 className="text-[50px] text-white">Cell Medicine:</h1>
            <p className="text-[50px] text-white w-[580px] flex flex-col">
              <span
                className="font-bold  text-[60px] bg-gradient-to-r 
 
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
              Получить Консультацию <Activity />
            </button>
            <button className="ml-4  border-2 border-[#0C7779]  font-medium  cursor-pointer px-6 py-3 rounded-full bg-white/5  backdrop-blur-sm text-white transition-colors duration-200">
              Изучите Технологии
            </button>
          </div>
        </div>
        <section className="w-full max-w-[1400px] mx-auto flex items-center gap-16 pt-35">
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

          <div className=" flex flex-col gap-2 mb-[20px]">
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
              textClassName="flex flex-col gap-2 text-[18px] text-gray-700"
            >
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3">
                  <span className="text-[#0C7779] text-2xl leading-none">
                    ✔
                  </span>
                  <span> Собственный криобанк мирового уровня</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0C7779] text-2xl leading-none">
                    ✔
                  </span>
                  <span> GMP сертифицированные лаборатории</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#0C7779] text-2xl leading-none">
                    ✔
                  </span>
                  <span> Международная команда биологов и врачей</span>
                </li>
              </ul>
            </SplitScroll>
          </div>
        </section>

        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-24 items-center">
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

          <div className="order-1 lg:order-2">
            <div className="w-full max-h-[380px] rounded-3xl overflow-hidden shadow-sm aspect-[4/3] lg:aspect-[13/10]">
              <img
                src={img5}
                alt="Клеточные технологии"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-24 items-center">
          <div className="order-1">
            <div className="w-[600px] h-[380px] relative rounded-2xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={vd4} type="video/mp4" />
              </video>
            </div>
          </div>

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
      <section className="mt-[120px]">
        <div className=" text-white bg-[#0C7779] text-center flex  justify-center items-center  max-w-auto h-[180px]  ">
          <div className=" flex flex-col  font-semibold">
            <p className="text-[25px]"> </p>
            <h1 className="text-[42px] font-bold ">
              Наш центр интерактивных технологий
            </h1>
          </div>
        </div>
      </section>
      <Container className="relative pt-6">
        <div className="flex items-center justify-center gap-2">
          <CardHover items={items} />
        </div>
        <div>
          <Terapiya />
        </div>
      </Container>
      <section className="mt-[120px]">
        <div className=" text-white bg-[#0C7779] text-center flex  justify-center items-center  max-w-auto h-[180px]  ">
          <div className=" flex flex-col  font-semibold">
            <StatsStrip />
          </div>
        </div>
        <div>
          <StatBioPulse />
        </div>
      </section>
      <Footer />
    </div>
  );
}
