import Zura from "./Zura.jpg";

function Profile() {
  const styles = {
    padding: "20px",
  };

  const imgStyle = {
    width: "200px",
    height: "200px",
  };

  return (
    <header style={styles}>
      <img style={imgStyle} src={Zura} alt="Zura" />
      <h1>Zura Shubitidze</h1>
      <p>I am Zura Shubitidze, 24 years old, a student at "Skillwill"</p>
    </header>
  );
}

export default Profile;
