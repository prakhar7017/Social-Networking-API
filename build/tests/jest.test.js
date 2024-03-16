"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../service/postService"));
const utils_1 = require("../utils/utils");
jest.mock("../repository");
jest.mock("../utils/utils");
describe("PostService", () => {
    let postService;
    let mockPostRepository;
    let mockFormateDate;
    beforeEach(() => {
        postService = new postService_1.default();
        let mockPostRepository;
        mockFormateDate = utils_1.FormateDate;
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe("createPost", () => {
        it("should create a post", () => __awaiter(void 0, void 0, void 0, function* () {
            const postInput = {
                _author_id: 'author_id',
                title: 'Title',
                description: 'Description',
                image: 'image_url'
            };
            const createdPost = Object.assign({ _id: 'postId' }, postInput);
            mockPostRepository.createPost.mockResolvedValue(createdPost);
            const result = yield postService.createPost(postInput);
            expect(mockPostRepository.createPost).toHaveBeenCalledWith(postInput);
            expect(mockFormateDate).toHaveBeenCalledWith({ post: createdPost });
            expect(result).toEqual(mockFormateDate.mock.results[0].value);
        }));
    });
});
