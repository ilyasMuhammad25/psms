import Link from "next/link";

export default function TopBar6() {
    return (
        <>
            <div className="optech-header-top bg-light1" >
                <div className="container">
                    <div className="optech-header-info-wrap">
                        <div className="optech-header-info  dark-color">
                            <ul>
                                <li>
                                    <i className="ri-map-pin-2-fill" />
                                    JL.CANDI BOROBUDUR NO.2,STADION KEBUN BUNGA MEDAN
                                </li>
                            </ul>
                        </div>
                        <div className="optech-header-info  dark-color">
                            <ul>
                                <li>
                                    <Link href="tel:123">
                                        <i className="ri-phone-fill" />
                                        518-564-3200
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:name@email.com">
                                        <i className="ri-mail-fill" />
                                        psms@gmail.com
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
