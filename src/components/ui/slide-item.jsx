const SlideItem = ({item}) => {
//   const translateYImage = new Animated.Value(40);

//   Animated.timing(translateYImage, {
//     toValue: 0,
//     duration: 1000,
//     useNativeDriver: true,
//     easing: Easing.bounce,
//   }).start();

  return (
    <div className={`${item.bgColor} rounded-xl min-w-[270px] pt-14 pb-7 px-9`}>
        <img src={item.icon} className='w-10 h-10 mb-2.5' />
        <p className='text-lg font-medium text-black'>{item.title}</p>
    </div>
  );
};

export default SlideItem;