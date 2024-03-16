import PostService from "../service/postService";
import { postRepository } from "../repository";
import { FormateDate } from "../utils/utils";
import { PostInterface } from "../interface/post.interace";

jest.mock("../repository");
jest.mock("../utils/utils");

interface PostRepositoryMock {
  createPost: jest.Mock<Promise<any>, [PostInterface]>;
}

describe("PostService", () => {
  let postService: PostService;
  let mockPostRepository: jest.Mocked<PostRepositoryMock>;
  let mockFormateDate: jest.MockedFunction<typeof FormateDate>;

  beforeEach(() => {
    postService = new PostService();
    let mockPostRepository: jest.Mocked<PostRepositoryMock>;
    mockFormateDate = FormateDate as jest.MockedFunction<typeof FormateDate>;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createPost", () => {
    it("should create a post", async () => {
      const postInput: PostInterface = {
        _author_id: 'author_id',
        title: 'Title',
        description: 'Description',
        image: 'image_url'
      };
      const createdPost: any = {
        _id: 'postId',
        ...postInput
      };

      mockPostRepository.createPost.mockResolvedValue(createdPost);

      const result = await postService.createPost(postInput);

      expect(mockPostRepository.createPost).toHaveBeenCalledWith(postInput);
      expect(mockFormateDate).toHaveBeenCalledWith({ post: createdPost });
      expect(result).toEqual(mockFormateDate.mock.results[0].value);
    });
  });
});
