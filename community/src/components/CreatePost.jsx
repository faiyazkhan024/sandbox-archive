import Card from "./core/Card";
import Input from "./core/Input";
import Button from "./core/Button";
import Select from "./core/Select";
import Typography from "./core/Typography";
import RichTextEditor from "./core/RichTextEditor";

import { POST_OPTIONS } from "../data";

const CreatePost = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <div className="flex items-center justify-between">
        <Typography variant="h3">Create a post</Typography>
        <Select
          variant="sm"
          placeholder="select"
          defaultValue="image/video"
          options={POST_OPTIONS}
        />
      </div>

      <form className="mt-4" onSubmit={handleSubmit}>
        <Input label="Title" name="title" labelClass="font-medium" />
        <RichTextEditor />
        <div className="flex justify-end gap-4 mt-4">
          <Button type="reset">Cancel</Button>
          <Button type="submit" variant="outlined" className="px-8">
            Post
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreatePost;
