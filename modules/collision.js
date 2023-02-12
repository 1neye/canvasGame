function collision(object1X, object1Y, object1W , object1H, object2X, object2Y, object2W, object2H) {
    return (
      object1Y + object1H >= object2Y &&
      object1Y<= object2Y + object2H &&
      object1X <= object2X + object2W &&
      object1X + object1W >= object2X
    )
  }

  export default collision