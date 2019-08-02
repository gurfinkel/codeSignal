#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub matrixTransposition {
    my ($matrix) = @_;

    my $rows = @$matrix;
    my $cols = @{@$matrix[0]};
    my @result;

    for (my $col = 0; $cols > $col; ++$col) {
        push(@result, []);
        for (my $row = 0; $rows > $row; ++$row) {
            push(@{@result[$col]}, @{@$matrix[$row]}[$col]);
        }
    }
    return \@result;
}
