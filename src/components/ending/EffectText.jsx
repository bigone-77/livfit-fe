const EffectText = ({ text, isBreak }) => {
  return (
    <span className={`${isBreak ? 'break-effect' : 'no-break-effect'} text-[150px] font-GameNumber`} data-text={text}>
      {text}
    </span>
  );
};

export default EffectText;
