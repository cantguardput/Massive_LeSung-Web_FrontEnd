import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProfileOrtu from "../components/ProfileOrtu";
import LaporanKonfirmasiOrtu from "../components/LaporanKonfirmasiOrtu";

function KelasBerlangsungKonfirmasiOrtu() {
  const isUserLoggedIn = true;
  const userRoleLoggedIn = "siswa";
  return (
    <>
      <NavBar is_login={isUserLoggedIn} userRole={userRoleLoggedIn} />
      <ProfileOrtu />
      <LaporanKonfirmasiOrtu />
      <Footer />
    </>
  );
}

export default KelasBerlangsungKonfirmasiOrtu;
