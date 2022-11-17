import React from "react";
import profile  from "../assets/profile.png";

const Section1 = () => {
  return (
    <div className="section1">
      <img src={profile} alt="img1" />
      <h1>START BOOTSTRAP</h1>
      <div className='start'>
      <hr className="rayita"/>
          <p className="fa-solid fa-star"></p>
          <hr className="rayita"/>
      </div>
  
      {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>START</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View> */}
      <h2>Web Developer- Graphic Artist - User Experience Desinger</h2>
    </div>
  );
};

export {Section1}
