/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import Footer from "../components/Footers/Footer.js";
import Image from "next/image";
import { TFunction } from "next-i18next";
import { withTranslation, i18n } from "@i18n";
import Typist from 'react-typist';

const AdminBase: React.FC<{ t: TFunction }> = ({ t }) => {
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ja" ? "en" : "ja");
  };
  return (
    <>
      <IndexNavbar />
      <section className="header relative pt-16 items-center flex h-screen">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div
              className="pt-32 sm:pt-0 TerminalMock"
            >
              <h1 className="font-semibold text-5xl text-white bg-black py-2" id="typing">
                <Typist cursor={{
                  blink: true,
                  element: '_',
                }}>
                  {"$ hack city -t Tokyo"}
                </Typist>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-400 py-4 bg-black">
                <Typist cursor={{
                  blink: true,
                  element: '_',
                }}>
                  <Typist.Delay ms={2000} />
                  <b>{t('concept_sub_1')}</b><br />
                  <Typist.Delay ms={500} />
                  <b>{t('concept_sub_2')}</b><br />
                  <Typist.Delay ms={500} />
                </Typist>
              </p>
              <br />
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  style={{ background: '#F50057' }}
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i>{" "}
                  {t('download_app')}
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-800 active:bg-pink-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style={{ background: '#444' }}
                  target="_blank"
                >
                  {t('hack_me_on_github')}
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdna.artstation.com/p/assets/images/images/024/408/272/large/jean-nicolas-racicot-wd2-hackerspace-00.jpg?1582308883"
          alt="..."
          className="absolute b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 TopImage"
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="CWCardWrap w-10/12 md:w-6/12 lg:w-4/12 px-4 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-900">
                <img
                  alt="..."
                  src="https://thinklab.jins.com/jp/ja/home/assets/images/detail/detail_home_002.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-gray-900 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    <i className="fas fa-coffee text-xl"></i>
                    {" " + t('coworking_space')}
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    {t('coworking_space_desc')}
                    <br />
                    <br />
                    {t('coworking_space_address')}
                  </p>
                </blockquote>
              </div>

              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  高速Wi-Fi
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Reserve
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Watch Broadcast
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Create Project
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Send Gifts
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Chat
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Online Talk
                </span>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4 FeatureCards">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4 ">
                  <div className="relative flex flex-col mt-4 FeatureCard">
                    <div className="px-4 py-5 flex-auto">
                      <img src="https://thinklab.jins.com/jp/ja/home/assets/images/detail/detail_home_007.jpg" />
                      <h6 className="text-xl mb-1 mt3 font-semibold">
                        {t('cafe_feature_1_title')}
                      </h6>
                      <p className="mb-4 text-gray-600">
                        {t('cafe_feature_1_desc')}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0 FeatureCard">
                    <div className="px-4 py-5 flex-auto">
                      <img src="https://crea.bunshun.jp/mwimgs/f/8/-/img_f84e5b944bdfd12793e7d7761853bfb5223392.jpg" />
                      <h6 className="text-xl mb-1 font-semibold">
                        {t('cafe_feature_3_title')}
                      </h6>
                      <p className="mb-4 text-gray-600">
                        {t('cafe_feature_3_desc')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4 FeatureCard">
                    <div className="px-4 py-5 flex-auto">
                      <img src="https://izilook.com/izilook/uploads/2017/06/room-up01.gif" />
                      <h6 className="text-xl mb-1 font-semibold">
                        {t('cafe_feature_2_title')}
                      </h6>
                      <p className="mb-4 text-gray-600">
                        {t('cafe_feature_2_desc')}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0 FeatureCard">
                    <div className="px-4 py-5 flex-auto">
                      <img src="data:image/jpeg;base64,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" />
                      <h6 className="text-xl mb-1 font-semibold">
                        {t('cafe_feature_4_title')}
                      </h6>
                      <p className="mb-4 text-gray-600">
                        {t('cafe_feature_4_desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-4 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-mobile text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {t('connect_by_the_app')}
              </h3>
              <p className="text-sm font-light leading-relaxed mt-4 mb-4 text-gray-700">
                {t('connect_by_the_app_desc')}
                <br />
                <br />
                {t('connect_by_the_app_desc2')}
              </p>
              <a
                href="#"
                target="_blank"
                className="font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150"
              >
                {t('view_detail')}{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="/img/component-btn.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src="/img/component-profile-card.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src="/img/component-info-card.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src="/img/component-info-2.png"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/component-menu.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src="/img/component-btn-pink.png"
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <img
                  alt="..."
                  style={{ borderRadius: 12 }}
                  src="/img/virtual.png"
                />
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 md:px-4 ml-auto mr-auto mt-48">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {t('virtual_space')}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                {t('virtual_space_desc')}
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                {t('virtual_space_desc2')}
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  WEB
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  iOS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Android
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  MacOS
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Windows
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  YouTube Live
                </span>
              </div>
              <a
                href="#"
                target="_blank"
                className="font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150"
              >
                {t('view_detail')}{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48 OnTheCode">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-4 md:px-4">
              <div className="md:pr-12">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  {t('everything_on_the_code')}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {t('everything_on_the_code_desc')}
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          {t('everything_on_the_code_subtitle1')}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          {t('everything_on_the_code_subtitle2')}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          {t('everything_on_the_code_subtitle3')}
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/documentation.png"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-4 md:px-4">
            <h2 className="font-semibold text-4xl">{t('more_projects')}</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">

            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-gray-700">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap" style={{ marginTop: -40 }}>
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap" style={{ alignItems: 'center' }}>
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Hackable Bar
                  </h5>
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="http://www.thedrinksbusiness.com/wordpress/wp-content/uploads/2015/01/photo_others-640x410.jpg"

                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Hackable Inn
                  </h5>
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://idecoration.co/wp-content/uploads/2019/06/Futuristic-houses-2.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Hackable Hotel
                  </h5>
                  <Link to="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://specials-images.forbesimg.com/imageserve/5f6cd669c0e512578a581ae8/960x0.jpg?fit=scale"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-700 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-4 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                {t('open_source')}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500">
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-gray-400"
                  target="_blank"
                >
                  Hackable
                </a>{" "}
                {t('coming_soon')}
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-500">
                Please Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-gray-800 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-gray-300 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-4 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                {t('do_you_interested')}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                {t('we_have_discord_community')}
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://discord.gg/6fKnQq9cPH"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  {t('join_discord')}
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>
                    Help With a Star</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export const Admin = withTranslation(["common", "home"])(
  AdminBase,
);
