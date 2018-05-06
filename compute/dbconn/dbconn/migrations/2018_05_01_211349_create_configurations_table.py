from orator.migrations import Migration


class CreateConfigurationsTable(Migration):

    def up(self):
        """
        Run the migrations.
        """
        with self.schema.create('configurations') as table:
            table.increments('id')
            table.timestamps()

    def down(self):
        """
        Revert the migrations.
        """
        self.schema.drop('configurations')
