json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! "api/questions/question", question: question

      question.votes.each do |vote|
        json.set! vote.id do
          json.userId vote.user_id
          json.voteableId vote.votable_id
          json.votableType vote.votable_type
          json.numVotes vote.num_votes
        end
      end

    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.votes do
  @questions.each do |question|
    question.votes.each do |vote|
      json.set! vote.id do
        json.userId vote.user_id
        json.voteableId vote.votable_id
        json.votableType vote.votable_type
        json.numVotes vote.num_votes
      end
    end
  end
end

