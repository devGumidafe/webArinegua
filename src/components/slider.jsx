const Slider = () => {
  const handleClick = (e, location) => {
    e.preventDefault();
    window.location.replace(`/${location}`);
  };

  return (
    <div className='slider'>
      <img
        src='/images/julia_cartel.jpg'
        alt='Cartel Julia'
        onClick={(e) => handleClick(e, '#Julia')}
      />
      <img
        src='/images/28.691_cartel.jpg'
        alt='Cartel 28.691'
        onClick={(e) => handleClick(e, '#28.691')}
      />
      <img
        src='/images/entrepalabras_cartel.jpg'
        alt='Cartel Entrepalabras'
        onClick={(e) => handleClick(e, '#Entrepalabras')}
      />
      <img
        src='/images/tenis_cartel.jpg'
        alt='Cartel Tenis'
        onClick={(e) => handleClick(e, '#Tenis')}
      />
    </div>
  );
};

export default Slider;
