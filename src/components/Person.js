function Person({ person }) {

  return (
    <span class="person">
      <span class="avatar">{person?.display_image?.image && <img class="avatar" src={person.display_image.image} />}</span>
      <div class="name">
        <p>{person.name} &lt; redacted &gt;</p>
      </div>
    </span>
  );
};

export default Person;
