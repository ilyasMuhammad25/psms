import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
            <div className="section large-padding-tb4 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="optech-thumb extra-mr">
                                <Image
                                    height="0"
                                    width="0"
                                    sizes="100vw"
                                    priority
                                    data-aos="fade-up"
                                    data-aos-duration={600}
                                    src="/assets/images/brand/psms.jpeg"
                                    alt="thumb"
                                    className="h-auto w-100"
                                />
                                <div
                                    className="optech-thumb-position"
                                    data-aos="fade-up"
                                    data-aos-duration={800}
                                >
                                    <Image
                                        height={341}
                                        width={303}
                                        priority
                                        src="/assets/images/shape/psms.jpeg"
                                        alt="thumb"
                                    />
                                </div>
                                <div className="optech-shape1">
                                    <Image
                                        height={200}
                                        width={133}
                                        priority
                                        src="/assets/images/shape/shape1.svg"
                                        alt="shape"
                                    />
                                </div>
                                <div className="optech-shape2">
                                    <Image
                                        height={107}
                                        width={104}
                                        priority
                                        src="/assets/images/shape/shape2.svg"
                                        alt="shape"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="optech-default-content ml40">
                                <h2>
                                    Sejarah PSMS Medan
                                </h2>
                                <p>
                                Sejarah PSMS dimulai dengan DVB. Secara eksplisit, para pemangku kepentingan sepakbola di Medan memulai rapat umum pertama untuk membentuk serikat pada tanggal 7 Juli 1907 (lihat pos De Sumatra, 08-07-1907). Kemudian kemudian, dengan berdirinya OSVB pada tahun 1915, DVB secara terbuka menyatakan bersedia untuk berintegrasi dengan OSVB (proses fusi). Sesuai dengan perkembangan situasi dan kondisi, coverage area OSVB sudah tidak efektif lagi. Pada bulan September 1949, para pemangku kepentingan sepak bola di Medan membentuk VBMO (proses fisi). Dalam rangka menyesuaikan kebijakan VUVSI (NIVU suksesi) pada tahun 1948 untuk menerjemahkan VUVSI menjadi ISNIS, maka VBMO juga diterjemahkan menjadi PSMS dan kemudian serikat sepak bola Medan disebut VBMO/PSMS.
                                </p>
                                <div className="optech-icon-list">
                                    <ul>
                                        <li>
                                            <i className="ri-check-line" />
                                            Easily Build Custom Reports And
                                            Dashboards
                                        </li>
                                        <li>
                                            <i className="ri-check-line" />
                                            Legacy Software Modernization
                                        </li>
                                        <li>
                                            <i className="ri-check-line" />
                                            Software For The Open Enterprise
                                        </li>
                                    </ul>
                                </div>
                                <div className="optech-extra-mt">
                                    <Link
                                        className="optech-default-btn"
                                        href="/about"
                                        data-text="More About Us"
                                    >
                                        <span className="btn-wraper">
                                            More About Us
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
