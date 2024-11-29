package Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.protoweb.Tables.Accounts;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface AccountsRepository extends JpaRepository<Accounts, Integer> {
}