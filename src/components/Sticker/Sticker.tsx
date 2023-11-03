import "./sticker.scss"

type Props = {
    text: string,
    callback: () => void
}

const Sticker = ({text, callback}: Props) => {
  return (
    <div className="sticker" onClick={() => callback()}>
      {text}
    </div>
  );
}

export default Sticker