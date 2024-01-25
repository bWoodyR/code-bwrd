import "./sectionHeader.scss";

type SectionHeaderProps = {
  sectionName: string;
  sectionInfoText?: string;
};

const SectionHeader = ({ sectionName, sectionInfoText }: SectionHeaderProps) => {
  return (
    <div className="sectionHeader">
      <h1 className="sectionHeader__title">{sectionName}</h1>
      {sectionInfoText && <p className="sectionHeader__infoText">{sectionInfoText}</p>}
    </div>
  );
};

export default SectionHeader;
