"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { awesomeServices2, psmsMatches } from "@/data/data";
import AwesomeServiceCard from "@/components/ui/cards/awesome-service-card";
import MatchScheduleCard from "../cards/MatchCard";

export default function AwesomeService() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="section optech-section-padding">
                <div className="container">
                    <div className="optech-section-title center">
                        <h2>Pertandingan Mendatang</h2>
                    </div>

                    <Slider
                        {...settings}
                        className="optech-4column-slider2"
                        data-aos="fade-up"
                        data-aos-duration={800}
                    >
                        {/* awesome service card start */}
                        {psmsMatches?.slice(0, 5).map((match, index) => (
                            <div key={index}>
                    <MatchScheduleCard
                        key={index}
                        homeTeam={match.homeTeam}
                        awayTeam={match.awayTeam}
                        league={match.league}
                        date={match.date}
                        time={match.time}
                        venue={match.venue}
                     />
                            </div>
                        ))}
                        {/* awesome service card end */}
                    </Slider>
                </div>
            </div>
        </>
    );
}
