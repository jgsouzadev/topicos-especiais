import professor from "./infra/database/model/professor.js"

export default new class ProfessorService {
    
    async createProfessor(professorName) {
        await professor.create({
            nome: professorName
        })  
    } 

    async getProfessor(professorId) {
        return await professor.findByPk(professorId)  
    } 

    async getAll() {
        return await professor.findAll();
    } 

    async deleteProfessor(professorId) {
       await professor.destroy({
        where: {
            id: professorId
        }
       })

       return true;
    } 

    async updateProfessor(professorObject) {
        const professor = this.getProfessor(professorObject.id)
        professor.nome = professorObject.nome
        return await professor.save()
    } 
}