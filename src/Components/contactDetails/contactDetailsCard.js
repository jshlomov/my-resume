

export default (props) => {
  return (
    <div className="contactCard">
      <a href={props.link} target="_blank" >
        <img src={props.imge}></img>
        <p>{props.title}</p>
      </a>
    </div>
  );
};
