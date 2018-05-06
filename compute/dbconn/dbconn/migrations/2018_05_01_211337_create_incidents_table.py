from orator.migrations import Migration


class CreateIncidentsTable(Migration):

    def up(self):
        """
        Run the migrations.
        """
        with self.schema.create('incidents') as table:
            table.increments('id')
            table.timestamps()

    def down(self):
        """
        Revert the migrations.
        """
        self.schema.drop('incidents')
