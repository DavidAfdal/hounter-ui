const Avatar = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className='w-[50px] h-[50px] rounded-full object-cover object-center' />;
};

export default Avatar;
