import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <section className="biodata-section">
        <h2 className="section-title">BIODATA</h2>
        <table className="biodata-table">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Cagiva Nur Stella</td>
            </tr>
            <tr>
              <td>Place, and Date of Birth:</td>
              <td>Kendal, 9 August 2006</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>Patean, Curugsewu Kendal Patean</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>cagivanurstela@gmail.com</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>081209090909</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="education-section">
        <h2 className="section-title">EDUCATIONAL BACKGROUND</h2>
        <table className="biodata-table">
            <tbody>
                <tr>
                    <td className="biodata-label">Kindergarten:</td>
                    <td> TK Mandiri 01 </td>
                </tr>
                <tr>
                    <td className="biodata-label">Elementary School:</td>
                    <td> SD Negeri 02 Curugsewu </td>
                </tr>
                <tr>
                    <td className="biodata-label">Junior High School:</td>
                    <td> SMP Negeri 01 Patean </td>
                </tr>
                <tr>
                    <td className="biodata-label">Vocational School:</td>
                    <td> SMK Muhammadiyah 04 Sukorejo </td>
                </tr>
            </tbody>
        </table>
        {/* Tambahkan data riwayat pendidikan di sini */}
      </section>
    </div>
  );
};

export default AboutMe;
