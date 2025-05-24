function SectionHeading({ icon, heading }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <div className="bg-blue h-0.5 flex-1"></div>
      <div className="text-blue flex items-center justify-center gap-2 text-2xl">
        {icon}
        <h2 className="font-bold">{heading}</h2>
      </div>
      <div className="bg-blue h-0.5 flex-1"></div>
    </div>
  );
}

export default SectionHeading;
