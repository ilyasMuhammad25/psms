"use client";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

export default function CompanyOverview() {
    const tableData = [
        { posisi: 1, klub: "PSPS PEKANBARU", main: 5, menang: 3, seri: 1, kalah: 1, gf: 11, ga: 6, gd: 5, poin: 10 },
        { posisi: 2, klub: "PERSIKOTA", main: 6, menang: 3, seri: 1, kalah: 2, gf: 9, ga: 9, gd: 0, poin: 10 },
        { posisi: 3, klub: "PERSIRAJA BANDA ACEH", main: 5, menang: 3, seri: 0, kalah: 2, gf: 8, ga: 5, gd: 3, poin: 9 },
        { posisi: 4, klub: "PSKC CIMAHI", main: 5, menang: 2, seri: 1, kalah: 2, gf: 3, ga: 5, gd: -2, poin: 7 },
        { posisi: 5, klub: "PSMS MEDAN", main: 4, menang: 2, seri: 1, kalah: 1, gf: 5, ga: 2, gd: 3, poin: 7 },
        { posisi: 6, klub: "DEJAN FC", main: 4, menang: 2, seri: 0, kalah: 2, gf: 4, ga: 7, gd: -3, poin: 6 },
        { posisi: 7, klub: "SRIWIJAYA FC", main: 5, menang: 1, seri: 2, kalah: 2, gf: 6, ga: 4, gd: 2, poin: 5 },
        { posisi: 8, klub: "FC BEKASI CITY", main: 4, menang: 1, seri: 2, kalah: 1, gf: 3, ga: 2, gd: 1, poin: 5 },
        { posisi: 9, klub: "PERSIKABO 1973", main: 6, menang: 1, seri: 0, kalah: 5, gf: 11, ga: 20, gd: -9, poin: 3 },
      ];
  return (
    <>
    <div className="section optech-section-padding bg-light1">
        <div className="container">
        <style jsx>{`
        .custom-striped-table {
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0;
          font-size: 18px;
          text-align: left;
        }

        .custom-striped-table th,
        .custom-striped-table td {
          padding: 12px 15px;
        }

        .custom-striped-table thead tr {
          background-color: #333;
          color: #ffffff;
          text-align: center;
        }

        .custom-striped-table tbody tr:nth-child(even) {
          background-color: #06732a; /* Green stripe */
          color: white;
        }

        .custom-striped-table tbody tr:nth-child(odd) {
          background-color: white;
        }

        .custom-striped-table tbody tr:hover {
          background-color: #ddd; /* Hover effect */
          color: black;
        }

        .container {
          padding: 20px;
        }
      `}</style>

      <h2>League Table</h2>
      <table className="custom-striped-table">
        <thead>
          <tr>
            <th>Posisi</th>
            <th>Klub</th>
            <th>Main</th>
            <th>Menang</th>
            <th>Seri</th>
            <th>Kalah</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Poin</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((team, index) => (
            <tr key={index}>
              <td>{team.posisi}</td>
              <td>{team.klub}</td>
              <td>{team.main}</td>
              <td>{team.menang}</td>
              <td>{team.seri}</td>
              <td>{team.kalah}</td>
              <td>{team.gf}</td>
              <td>{team.ga}</td>
              <td>{team.gd}</td>
              <td>{team.poin}</td>
              <td>{/* Form buttons can go here */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
}
