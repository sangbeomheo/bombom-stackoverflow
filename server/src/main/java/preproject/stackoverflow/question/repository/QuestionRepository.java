package preproject.stackoverflow.question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import preproject.stackoverflow.member.entity.Member;
import preproject.stackoverflow.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Query("FROM Question q WHERE q.questionStatus <> 'QUESTION_DELETED'")
    Page<Question> findAllByQuestionNotDeleted(Pageable pageable);
}
