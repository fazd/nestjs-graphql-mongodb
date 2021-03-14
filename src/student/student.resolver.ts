import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { CreateStudentInput } from './student.input';
import { StudentService } from './student.service';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  // @Query((returns) => LessonType)
  // lesson(@Args('id') id: string) {
  //   return this.lessonService.getLesson(id);
  // }

  // @Query((returns) => [LessonType])
  // lessons() {
  //   return this.lessonService.getLessons();
  // }

  @Mutation((returns) => StudentType)
  createLesson(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
