import { fileSave } from "browser-fs-access";
import { Button, ButtonGroup, Col } from "react-bootstrap";
import { ListItem } from "../../../../components";
import services from "../../../../services";
import { slugify } from "../../../../shared/utils/stringHelper";

export default function MaterialItem(props) {
  const { data } = props;

  const downloadFile = async () => {
    console.log(data);
    const file = await services.course.downloadMaterial(data.id);

    const nameSplit = data.filename.split(".");
    const fileExtension = `.${nameSplit[nameSplit.length - 1]}`;
    await fileSave(file, {
      fileName: `${slugify(data.title)}${fileExtension}}`,
      extensions: [fileExtension],
    });
  };

  return (
    <ListItem>
      <Col>
        <h3 className="lead">{data.title}</h3>
      </Col>
      <ButtonGroup>
        <Button variant="secondary" onClick={downloadFile}>
          DOWNLOAD
        </Button>
      </ButtonGroup>
    </ListItem>
  );
}
