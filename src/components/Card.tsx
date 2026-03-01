type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

export function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
